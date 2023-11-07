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
 *  /ListOfDoctor:
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
 *  /ListOfDoctorWithTime:
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
 *  /ResumeDoctor:
 *      post:
 *          tags: [OverView-Admin-Section]
 *          summary: find Product By Id
 *          description: find Product By Id
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/OverViewSchemas/getResumeDoctor'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/OverViewSchemas/getResumeDoctor'
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