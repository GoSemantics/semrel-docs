---
title: "Plugin: hook-slack"
description: Posts release notifications to Slack through an incoming webhook.
---

Posts release notifications to Slack through an incoming webhook. Use it to share new versions, changelog highlights, and dry-run results with your team.

## Installation

```bash
go install github.com/SemRels/hook-slack@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: hook-slack
    path: hook-slack
    args:
      webhook_url: '${{ env.SLACK_WEBHOOK_URL }}'
      channel: '#releases'
      username: semrel
      icon_emoji: ':rocket:'
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_WEBHOOK_URL` | yes | `—` | Slack incoming webhook URL. |
| `SEMREL_PLUGIN_CHANNEL` | no | `workspace default` | Override the destination channel for the webhook. |
| `SEMREL_PLUGIN_USERNAME` | no | `semrel` | Display name for the Slack message. |
| `SEMREL_PLUGIN_ICON_EMOJI` | no | `:rocket:` | Emoji icon for the Slack message. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_BUMP`
- `SEMREL_BRANCH`
- `SEMREL_CHANGELOG`
- `SEMREL_DRY_RUN`

## Example Output

A successful release can post `v1.4.0 released from main` with the generated changelog to `#releases` using the configured webhook.

## Source

- [SemRels/hook-slack](https://github.com/SemRels/hook-slack)
