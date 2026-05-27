---
title: "Plugin: condition-gitea-actions"
description: Confirms the current release is running inside Gitea Actions.
---

Confirms the current release is running inside Gitea Actions. Use it to block local or foreign CI runs from publishing official releases.

## Installation

```bash
go install github.com/SemRels/condition-gitea-actions@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: condition-gitea-actions
    path: condition-gitea-actions
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| _None_ | no | — | This plugin has no dedicated `SEMREL_PLUGIN_*` variables. |

## Release Context Variables

This plugin does not require any of the shared `SEMREL_*` release context variables to do its job.

## Behavior

When `GITEA_ACTIONS=true`, the condition passes. Outside Gitea Actions, the plugin exits non-zero so the release does not continue.

## Source

- [SemRels/condition-gitea-actions](https://github.com/SemRels/condition-gitea-actions)
