# How to release

This documentation explains the process to release the design system.

## Create a release candidate

First of all, before releasing a new version, you need to create a release candidate. A RC is not stable yet but can be tested by the users.

To create a release candidate, you need to create a new branch from the `main` branch. The branch name should be `release/X.Y.Z` where `X.Y.Z` is the version number you want.

```bash
git switch main
git pull
git switch -c release/1.0.0
```

If it's the first time you release candidate this new version, you don't need to commit anything. But you can still commit some changes on this branch, for example, after testing the first release candidate and realizing that you need to fix something.
When you are ready to candidate release the version, you can create a tag.

```bash
git tag v1.0.0
```

The prefix is important because it is used to know which design system has to be released.

After that, you can push the tag, then the branch.

```bash
git push --tags
git push release/1.0.0
```

The Github Actions will then be launched and will publish the release candidate on the npm registry. If the Github Actions doesn't launch on itself you have the option to launch it manually.

## Create a release

Your release candidate has been tested and everything looks good, you are now ready to release the version.

You need to be on the `main` branch and merge the changes that occured on the `release` branch.

```bash
git switch main
git pull
git merge release/1.0.0
```

Then you can create a tag for the release.

```bash
git tag v1.0.0
```

And push the tag and the branch.

```bash
git push --tags
git push
```

The Github Actions will then be launched and will publish the release on the npm registry. If the Github Actions doesn't launch on itself you have the option to launch it manually.
Once everything is done, you can communicate on this new release.
