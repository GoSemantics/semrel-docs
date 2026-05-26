---
title: "Plugin: provider-github"
description: Publishes releases to GitHub using the generated SemRel tag, version, and changelog.
---

Publishes releases to GitHub using the generated SemRel tag, version, and changelog. It supports draft and prerelease flags and can upload matching assets from the local workspace.

## Installation

```bash
go install github.com/SemRels/provider-github@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: provider-github
    path: provider-github
    args:
      token: '${{ env.GITHUB_TOKEN }}'
      owner: SemRels
      repo: semrel
      draft: false
      prerelease: false
      asset_glob: 'dist/*'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_TOKEN` | yes | `â€”` | GitHub token used to create the release. |
| `SEMREL_PLUGIN_OWNER` | no | `current repository owner` | Repository owner or organization. |
| `SEMREL_PLUGIN_REPO` | no | `current repository name` | Repository name to publish into. |
| `SEMREL_PLUGIN_DRAFT` | no | `false` | Create the release as a draft. |
| `SEMREL_PLUGIN_PRERELEASE` | no | `false` | Mark the release as a prerelease. |
| `SEMREL_PLUGIN_ASSET_GLOB` | no | `â€”` | Glob pattern for release assets to upload. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_CHANGELOG`
- `SEMREL_DRY_RUN`

## Behavior

For `v1.4.0`, the provider can create a GitHub release, attach files matching `dist/*`, and publish the SemRel changelog as the release notes.

## Source

- [SemRels/provider-github](https://github.com/SemRels/provider-github)
