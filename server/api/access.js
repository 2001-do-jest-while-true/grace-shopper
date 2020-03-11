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

// We realize this might be insecure, but this feature
// was added last minute and we did not have time to secure
// it further

const duckAccess = (req, res, next) => {
  if (!req.query.duck) {
    const notDuckError = new Error('Not a valid route')
    notUserError.status = 401
    return next(notDuckError)
  }
  next()
}

module.exports = {
  isAUser,
  adminsOnly,
  isYouOnly,
  duckAccess
}
