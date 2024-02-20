export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  google: {
    inputQuery: ["input[name='q']"],
    bodyQuery: ['#place-'],
    sidebarContainerQuery: ['#rhs'],
    appendContainerQuery: ['#rcnt'],
  },
  arxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['#abs'],
    sidebarContainerQuery: ['div[class="metatable"]'],
    appendContainerQuery: [],
  },
  ar5iv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="ltx_page_main"]'],
    sidebarContainerQuery: ['div[class="ltx_page_content"]'],
    appendContainerQuery: [],
  },
  biorxiv: {
    inputQuery: ["input[name='query']"],
    bodyQuery: ['div[class="inside"]'],
    sidebarContainerQuery: ['#panels-ajax-tab-container-highwire_article_tabs'],
    appendContainerQuery: [],
  },
  pubmed: {
    inputQuery: [],
    bodyQuery: ['#abstract'],
    sidebarContainerQuery: ['#copyright'],
    appendContainerQuery: [],
  },
  ieeexplore: {
    inputQuery: [],
    bodyQuery: ['div.abstract-text.row div.u-mb-1 div'],
    sidebarContainerQuery: ['div.u-pb-1.stats-document-abstract-publishedIn'],
    appendContainerQuery: [],
  },
}
