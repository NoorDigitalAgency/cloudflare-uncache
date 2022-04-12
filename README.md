# Uncacher, clear the cache for the resources

Used for:
- Clears the cache and enables the development mode for a domain

Usage:
```yaml
    steps:
      - uses: NoorDigitalAgency/uncacher@main
        name: Uncacher
        with:
          api_token: ${{ secrets.UNCACHER_API_TOKEN }}
          development_mode: true
          domain: somaething.com
```
