---
title: "Plugin: generator-changelog-html"
description: Generates an HTML changelog for the pending release.
---

Generates an HTML changelog for the pending release. It is useful for release portals, static sites, and emails that need richly formatted output.

## Installation

```bash
go install github.com/SemRels/generator-changelog-html@latest
```

Each plugin is a standalone Go binary. Keep it on your `PATH` or reference it with `path:` in `.semrel.yaml`. If you keep secrets in a `.env` file, load them with `semrel --env-file .env release`.

## Configuration

```yaml
version: 1
plugins:
  - name: generator-changelog-html
    path: generator-changelog-html
    args:
      template: templates/changelog.html.tmpl
      css_file: templates/changelog.css
      max_commits: 100
```

## Environment Variables

| Name | Required | Default | Description |
| --- | --- | --- | --- |
| `SEMREL_PLUGIN_TEMPLATE` | no | `built-in template` | Path to a Go template used to render the changelog. |
| `SEMREL_PLUGIN_CSS_FILE` | no | `â€”` | Optional CSS file to embed or reference in the HTML output. |
| `SEMREL_PLUGIN_MAX_COMMITS` | no | `100` | Maximum number of commits to include. |

## Release Context Variables

- `SEMREL_TAG_NAME`
- `SEMREL_NEXT_VERSION`
- `SEMREL_CURRENT_VERSION`
- `SEMREL_BUMP`
- `SEMREL_BRANCH`
- `SEMREL_TAG_PREFIX`
- `SEMREL_DRY_RUN`

## Example Output

A generated changelog can include HTML like `<h2>v1.4.0</h2><ul><li>feat: add search endpoint</li><li>fix: handle empty state</li></ul>`.

## Source

- [SemRels/generator-changelog-html](https://github.com/SemRels/generator-changelog-html)
