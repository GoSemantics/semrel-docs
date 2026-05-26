---
title: "Plugin: updater-docker"
description: Updates a version argument inside a Dockerfile.
---

Updates a version argument inside a Dockerfile. It is useful when your container build embeds the application version through a build argument.

## Installation

```bash
go install github.com/SemRels/updater-docker@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: updater-docker
    path: updater-docker
    args:
      file: Dockerfile
      arg_name: VERSION
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_FILE` | no | `Dockerfile` | Dockerfile to update. |
| `SEMREL_PLUGIN_ARG_NAME` | no | `VERSION` | Docker build argument that stores the release version. |

## Release Context Variables

- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_TAG_NAME`
- `SEMREL_DRY_RUN`

## Behavior

For a `1.4.0` release, the updater can rewrite `ARG VERSION=1.3.2` to `ARG VERSION=1.4.0` in the target Dockerfile.

## Source

- [SemRels/updater-docker](https://github.com/SemRels/updater-docker)
