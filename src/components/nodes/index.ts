import { markdownModule } from './markdown'
import { textModule } from './text'
import { mermaidModule } from './mermaid'

export const messageModuleMap: Record<string, MessageModule> = {
  text: textModule,
  markdown: markdownModule,
  mermaid: mermaidModule,
}
