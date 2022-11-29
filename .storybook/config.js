import { configure } from '@storybook/react'

function loadStories() {
  require('../tools/box.stories')
}

configure(loadStories, module)
