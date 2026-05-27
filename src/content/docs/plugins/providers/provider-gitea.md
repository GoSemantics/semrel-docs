---
title: "Plugin: provider-gitea"
description: Publishes releases to a Gitea instance.
---

Publishes releases to a Gitea instance. It is a good fit for self-hosted teams that manage repositories and releases in Gitea.

## Installation

```bash
go install github.com/SemRels/provider-gitea@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: provider-gitea
    path: provider-gitea
    args:
      base_url: 'https://gitea.example.com'
      token: '${{ env.GITEA_TOKEN }}'
      owner: SemRels
      repo: semrel
      draft: false
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_BASE_URL` | yes | `—` | Base URL for the Gitea instance. |
| `SEMREL_PLUGIN_TOKEN` | yes | `—` | API token for Gitea authentication. |
| `SEMREL_PLUGIN_OWNER` | no | `current repository owner` | Repository owner or organization. |
| `SEMREL_PLUGIN_REPO` | no | `current repository name` | Repository name to publish into. |
| `SEMREL_PLUGIN_DRAFT` | no | `false` | Create the release as a draft. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_CHANGELOG`
- `SEMREL_DRY_RUN`

## Behavior

For `v1.4.0`, the provider can create a Gitea release that uses the SemRel tag name and publishes the generated changelog body.

## Source

- [SemRels/provider-gitea](https://github.com/SemRels/provider-gitea)
