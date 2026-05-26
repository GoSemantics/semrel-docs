---
title: "Plugin: condition-gitlab-ci"
description: Confirms the current release is running inside GitLab CI.
---

# Plugin: condition-gitlab-ci

Confirms the current release is running inside GitLab CI. It is a simple safeguard for teams that only trust GitLab-managed pipelines to publish versions.

## Installation

```bash
go install github.com/SemRels/condition-gitlab-ci@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: condition-gitlab-ci
    path: condition-gitlab-ci
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| _None_ | no | — | This plugin has no dedicated `SEMREL_PLUGIN_*` variables. |

## Release Context Variables

This plugin does not require any of the shared `SEMREL_*` release context variables to do its job.

## Behavior

When `GITLAB_CI=true`, the plugin succeeds. On developer machines or other CI systems, it fails and prevents the release step.

## Source

- [SemRels/condition-gitlab-ci](https://github.com/SemRels/condition-gitlab-ci)
