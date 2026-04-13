# How to release

This documentation explains the process to release the design system.

## Create a release candidate (RC)

A release candidate is a pre-release version that can be tested before the final release.

### Step 1: Create a release branch

Create a new branch from `main` with the naming convention `release/X.Y.Z`:

```bash
git switch main
git pull
git switch -c release/1.0.0
```

### Step 2: Make fixes if needed

If this is the first RC for this version, you typically won't make any commits. However, if you find issues during RC testing and need to fix them, commit changes to this branch.

### Step 3: Tag and publish

When ready to publish the RC, create and push a tag with the format `X.Y.Z-RC.N`:

```bash
git tag 1.0.0-RC.1
git push origin release/1.0.0
git push --tags
```

**The GitHub Actions workflow will automatically trigger** and publish the RC to npm with the `rc` tag.

### Step 4: Test the RC

Users can test the RC version:

```bash
npm install @axa-fr/canopee-react@1.0.0-RC.1
```

### Step 5: Create additional RCs if needed

If bugs are found and fixes are made on the release branch, increment the RC number:

```bash
git tag 1.0.0-RC.2
git push origin release/1.0.0
git push --tags
```

If you need to publish multiple RCs, the workflow will handle each one independently.

## Create a release (stable version)

Once the release candidate has been thoroughly tested and approved, you're ready to release the stable version.

### Step 1: Merge to main

The release branch should be merged back to `main`:

```bash
git switch main
git pull
git merge release/1.0.0
```

### Step 2: Tag and publish

Create and push a tag with the format `X.Y.Z`:

```bash
git tag 1.0.0
git push --tags
git push
```

**The GitHub Actions workflow will automatically trigger** and publish the release to npm with the `latest` tag.

### Step 3: Distribute

Users can now use the stable version:

```bash
npm install @axa-fr/canopee-react@1.0.0
```

## Troubleshooting

### Workflow didn't trigger automatically

The workflow triggers on:

- Push of tags matching `X.Y.Z-RC.*` (RC versions)
- Push of tags matching `X.Y.Z` (stable versions)
- Push to `main` branch

If the workflow doesn't trigger, you can manually trigger it via the GitHub Actions UI by selecting the `Publish Packages` workflow and clicking "Run workflow", then choosing the appropriate ref (branch or tag).

### Incorrect version calculated

Ensure you're on the correct branch when creating tags:

- For RC: push tag from or merge back to `release/X.Y.Z` branch
- For stable: push tag from or merge back to `main` branch

The workflow automatically checks out the correct branch based on the tag format.
