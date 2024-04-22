declare interface InstallationResponse {
    id: number
    account: Account
    repository_selection: string
    access_tokens_url: string
    repositories_url: string
    html_url: string
    app_id: number
    app_slug: string
    target_id: number
    target_type: string
    permissions: Permissions
    events: string[] | null
    created_at: string
    updated_at: string
    single_file_name: string | null
    has_multiple_single_files: boolean
    single_file_paths: string[] | null
    suspended_by: string | null
    suspended_at: string | null
}

declare interface Account {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
}

declare interface Permissions {
    contents: string
    metadata: string
    pull_requests: string
    administration: string
}
