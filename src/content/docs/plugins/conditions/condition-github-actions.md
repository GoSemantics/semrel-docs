---
title: "Plugin: condition-github-actions"
description: Confirms the current release is running inside GitHub Actions.
---

Confirms the current release is running inside GitHub Actions. It is useful when you want releases to happen only from your GitHub-hosted CI pipeline.

## Installation

```bash
go install github.com/SemRels/condition-github-actions@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: condition-github-actions
    path: condition-github-actions
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| _None_ | no | — | This plugin has no dedicated `SEMREL_PLUGIN_*` variables. |

## Release Context Variables

This plugin does not require any of the shared `SEMREL_*` release context variables to do its job.

## Behavior

When `GITHUB_ACTIONS=true`, the plugin succeeds immediately. If the variable is missing or set to another value, the condition fails and SemRel stops the pipeline.

## Source

- [SemRels/condition-github-actions](https://github.com/SemRels/condition-github-actions)
