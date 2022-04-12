export type Response = {
  result: Array<{
    id: string
    name: string
    status: string
    paused: boolean
    type: string
    development_mode: number
    name_servers: Array<string>
    original_name_servers: Array<string>
    original_registrar: any
    original_dnshost: any
    modified_on: string
    created_on: string
    activated_on: string
    meta: {
      step: number
      custom_certificate_quota: number
      page_rule_quota: number
      phishing_detected: boolean
      multiple_railguns_allowed: boolean
    }
    owner: {
      id: string
      type: string
      email: string
    }
    account: {
      id: string
      name: string
    }
    permissions: Array<string>
    plan: {
      id: string
      name: string
      price: number
      currency: string
      frequency: string
      is_subscribed: boolean
      can_subscribe: boolean
      legacy_id: string
      legacy_discount: boolean
      externally_managed: boolean
    }
  }>
  result_info: {
    page: number
    per_page: number
    total_pages: number
    count: number
    total_count: number
  }
  success: boolean
  errors: Array<any>
  messages: Array<any>
}
