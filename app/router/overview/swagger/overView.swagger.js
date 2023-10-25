/**
 * @swagger
 *  components:
 *     OverViewSchemas:
 *        getResumeDoctor:
 *           type: object
 *           required:
 *              -   username
 *           properties:
 *              username:
 *                  type: string
 *                  description: name Topic 
 *     
 */

/**
 * @swagger
 *  tags:
 *      name : OverView-Admin-Section
 *      description : OverView-Admin-Section
 */




/**
 * @swagger
 *  /getListOfDoctor:
 *      get:
 *          tags: [OverView-Admin-Section]
 *          summary: Manager
 *          description: get List Of Doctor
 *          requestBody:
 *              required: false
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

/**
 * @swagger
 *  /getListOfDoctorWithTime:
 *      get:
 *          tags: [OverView-Admin-Section]
 *          summary: Manager
 *          description: get List Of Doctor With Time
 *          requestBody:
 *              required: false
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */

 /**
 * @swagger
 *  /getResumeDoctor:
 *      post:
 *          tags: [OverView-Admin-Section]
 *          summary: find Product By Id
 *          description: find Product By Id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/OverViewSchemas/TopicSchemas/getResumeDoctor'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/OverViewSchemas/TopicSchemas/getResumeDoctor'
 *          responses:
 *              201: 
 *                  description: Success
 *              400: 
 *                  description: Bad Request
 *              401: 
 *                  description: Unauthorization
 *              500: 
 *                  description: Internal Server Error 
 */