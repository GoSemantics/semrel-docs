---
title: "Plugin: hook-jira"
description: Updates Jira release metadata after SemRel publishes a version.
---

# Plugin: hook-jira

Updates Jira release metadata after SemRel publishes a version. It is useful for creating or updating fix versions and aligning Jira projects with shipped SemVer releases.

## Installation

```bash
go install github.com/SemRels/hook-jira@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: hook-jira
    path: hook-jira
    args:
      base_url: 'https://jira.example.com'
      token: '${{ env.JIRA_TOKEN }}'
      project: SEMREL
      fix_version_template: '{{ .NextVersion }}'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_BASE_URL` | yes | `—` | Base URL for the Jira instance. |
| `SEMREL_PLUGIN_TOKEN` | yes | `—` | API token for Jira authentication. |
| `SEMREL_PLUGIN_PROJECT` | yes | `—` | Jira project key. |
| `SEMREL_PLUGIN_FIX_VERSION_TEMPLATE` | no | `plugin-defined` | Template used to name the Jira fix version. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_BUMP`
- `SEMREL_BRANCH`
- `SEMREL_CHANGELOG`
- `SEMREL_DRY_RUN`

## Behavior

With `fix_version_template: '{{ .NextVersion }}'`, a release to `v1.4.0` can create or update the Jira fix version `1.4.0` in the configured project.

## Source

- [SemRels/hook-jira](https://github.com/SemRels/hook-jira)
