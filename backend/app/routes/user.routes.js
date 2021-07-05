const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

   app.get("/api/test/all", controller.allAccess);

   app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);//for looged in users(admin/seller/buyer)

  app.get(
    "/api/test/editor",
    [authJwt.verifyToken, authJwt.isEditor],
    controller.editorBoard
  );

  app.get(
    "/api/test/reviewer",
    [authJwt.verifyToken, authJwt.isReviewer],
    controller.reviewerBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  app.put(
      "/api/test/user",
      [authJwt.verifyToken],
      controller.updateUser
  );

  
};
