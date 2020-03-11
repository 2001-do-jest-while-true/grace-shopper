const isAUser = (req, res, next) => {
  if (!req.user) {
    const notUserError = new Error('Not a User')
    notUserError.status = 401
    return next(notUserError)
  }
  next()
}

const adminsOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    const notAdminError = new Error('Not an Admin')
    notAdminError.status = 401
    return next(notAdminError)
  }
  next()
}

const isYouOnly = (req, res, next) => {
  if (+req.params.userId !== req.user.id) {
    const notMeError = new Error('Not the right User')
    notMeError.status = 401
    return next(notMeError)
  }
  next()
}

module.exports = {
  isAUser,
  adminsOnly,
  isYouOnly
}
