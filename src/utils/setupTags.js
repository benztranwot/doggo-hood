const setupTags = dogs => {
  const allTags = {}

  dogs.forEach(dog => {
    dog.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })

  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b
    return firstTag.localeCompare(secondTag)
  })

  return newTags
}

export default setupTags
