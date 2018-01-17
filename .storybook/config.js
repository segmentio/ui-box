import { configure } from '@storybook/react'

function loadStories() {
  require('../tools/story')
}

configure(loadStories, module)
