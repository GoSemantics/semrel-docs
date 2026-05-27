---
title: "Plugin: provider-git"
description: Creates git tags and optionally pushes branch updates through the local Git remote.
---

Creates git tags and optionally pushes branch updates through the local Git remote. Use it when your release flow only needs native Git operations instead of a forge-specific API.

## Installation

```bash
go install github.com/SemRels/provider-git@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: provider-git
    path: provider-git
    args:
      remote: origin
      push_branch: true
      signing_key: ABCDEF1234567890
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_REMOTE` | no | `origin` | Remote name used for push operations. |
| `SEMREL_PLUGIN_SIGNING_KEY` | no | `—` | Optional signing key for annotated or signed tags. |
| `SEMREL_PLUGIN_PUSH_BRANCH` | no | `false` | Push the current branch in addition to the tag. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_BRANCH`
- `SEMREL_TAG_PREFIX`
- `SEMREL_DRY_RUN`

## Behavior

For `v1.4.0`, the provider can create the tag locally and push it to `origin`. If `push_branch` is `true`, it can also push the release commit on the current branch.

## Source

- [SemRels/provider-git](https://github.com/SemRels/provider-git)
