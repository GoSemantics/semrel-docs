---
title: "Plugin: hook-gitplugin"
description: Pushes release-related changes to another Git repository or branch.
---

# Plugin: hook-gitplugin

Pushes release-related changes to another Git repository or branch. Use it when SemRel needs to mirror release metadata into a different checkout or automation repository.

## Installation

```bash
go install github.com/SemRels/hook-gitplugin@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: hook-gitplugin
    path: hook-gitplugin
    args:
      repo: 'https://github.com/SemRels/release-mirror.git'
      branch: main
      token: '${{ env.GITPLUGIN_TOKEN }}'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_REPO` | yes | `—` | Git repository URL or path to update. |
| `SEMREL_PLUGIN_BRANCH` | no | `main` | Target branch to push. |
| `SEMREL_PLUGIN_TOKEN` | no | `—` | Optional token for authenticated pushes. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_BRANCH`
- `SEMREL_CHANGELOG`
- `SEMREL_DRY_RUN`

## Behavior

For a `v1.4.0` release, the hook can clone the configured repository, update release artifacts on `main`, and push the resulting commit after SemRel finishes successfully.

## Source

- [SemRels/hook-gitplugin](https://github.com/SemRels/hook-gitplugin)
