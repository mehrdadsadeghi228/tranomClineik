/**
 * @swagger
 *  components:
 *     ManagerSchemas:
 *        AddDoctor:
 *           type: object
 *           required:
 *              -   userFullName
 *              -   resume
 *              -   dayOfWeekFree
 *              -   mobile
 *           properties:
 *              userFullName:
 *                 type: string
 *                 description: name Topic 
 *              resume:
 *                 type: file
 *                 description: name Topic 
 *              dayOfWeekFree:
 *                 type: string
 *                 description: name Topic 
 *              mobile:
 *                 type: number
 *                 description: name Topic 
 *        getVerifyMobileAdmin:
 *           type: object
 *           required:
 *              -  userCode
 *           properties:
 *              name:
 *                 type: string
 *                 description: name Topic 
 *      
 */

/**
 * @swagger
 *  tags:
 *      name : Manager-Admin-Section
 *      description : Manager-Admin-Section
 */


/**
 * @swagger
 *  /manager/AddDoctor:
 *      post:
 *          tags: [Manager-Admin-Section]
 *          summary: Manager
 *          description: AddDoctor
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/AddDoctor'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/AddDoctor'
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
 *  /manager/getVerifyMobileAdmin:
 *      post:
 *          tags: [Customer-Auth-Admin-Section]
 *          summary: Customer- Auth
 *          description: get Verify Mobile Admin
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
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
 *  /manager/SendsMobileCodeAdmin:
 *      get:
 *          tags: [Manager-Admin-Section]
 *          summary: Manager
 *          description: Sends Mobile CodeAdmin
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