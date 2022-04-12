# Cloudflare Uncache Action

Used for:
- Clears the cache and enables the development mode for a domain of Cloudflare

Usage:
```yaml
    steps:
      - uses: NoorDigitalAgency/cloudflare-uncache@main
        name: Cloudflare Uncache
        with:
          api_token: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          development_mode: true
          domain: somaething.com
```
