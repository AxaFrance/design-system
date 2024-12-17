# How to release

This documentation explains the process to release the design system.

## Create a release candidate

First of all, before releasing a new version, you need to create a release candidate. A RC is not stable yet but can be tested by the users.

To create a release candidate, you need to create a new branch from the `main` branch. The branch name should be `releases-DESIGN_SYSTEM/X.Y.Z` where `DESIGN_SYSTEM` is the design system you want to release and `X.Y.Z` is the version number you want.

If you want to make a release `1.0.0` for the `slash` design system, you should create a branch named `releases-slash/1.0.0`.
If you want to make a release `1.0.0` for the `look and feel` design system, you should create a branch named `releases-look-and-feel/1.0.0`.

```bash
git switch main
git pull
git switch -c releases-slash/1.0.0-RC.1
```

If it's the first time you release candidate this new version, you don't need to commit anything. But you can still commit some changes on this branch, for example, after testing the first release candidate and realizing that you need to fix something.
When you are ready to candidate release the version, you can create a tag.

```bash
git tag slash/1.0.0-RC.1
```

The prefix is important because it is used to know which design system has to be released.

After that, you can push the tag, then the branch.

```bash
git push --tags
git push releases-slash/1.0.0-RC.1
```

The Github Actions will then be launched and will publish the release candidate on the npm registry. If the Github Actions doesn't launch on itself you have the option to launch it manually.

## Create a release

Your release candidate has been tested and everything looks good, you are now ready to release the version.

You need to be on the `main` branch and merge the changes that occured on the `releases` branch.

```bash
git switch main
git pull
git merge releases-slash/1.0.0-RC.1
```

Then you can create a tag for the release.

```bash
git tag slash/1.0.0
```

And push the tag and the branch.

```bash
git push --tags
git push
```

The Github Actions will then be launched and will publish the release on the npm registry. If the Github Actions doesn't launch on itself you have the option to launch it manually.
Once everything is done, you can communicate on this new release.