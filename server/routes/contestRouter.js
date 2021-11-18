const { Router } = require('express');
const contestController = require('./../controllers/contestController');
const checkToken = require('./../middlewares/checkToken');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const upload = require('./../utils/fileUpload');

const contestRouter = Router();

contestRouter.get(
  '/',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  basicMiddlewares.parseQuery,
  contestController.getContests
);

contestRouter.get(
  '/customers',
  checkToken.checkToken,
  contestController.getCustomersContests
);

contestRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest
);

contestRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);

contestRouter.post(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest
);

module.exports = contestRouter;
