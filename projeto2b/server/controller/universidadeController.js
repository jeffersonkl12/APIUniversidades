const router = require("express").Router();
const universidadeRouter = require("../router/universidadeRouter");

router.get("/", universidadeRouter.findAllUniversidade);
router.get("/:id", universidadeRouter.findByIdUniversidade);
router.post("/", universidadeRouter.saveUniversidade);
router.put("/:id", universidadeRouter.updateUniversidade);
router.delete("/:id", universidadeRouter.deleteUniversidade);

module.exports = router;