const { User } = require('../user')



describe("testing the users profile", () => {
  const sam = new User('samson', 'male', 'Sir')
  it('should be created with a name, gender and title', () => {
    expect(sam.name).toBe('samson')
  })

  it('should return a profile of the users info', () => {
    const name = 'samson'
    const gender = 'male'
    const title = 'Sir'
    expect(sam.profile()).toBeInstanceOf(Object)
    expect(sam.profile()).toEqual({
      name,
      gender,
      title,
    })
  })
})