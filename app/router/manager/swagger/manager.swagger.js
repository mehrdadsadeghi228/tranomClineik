/**
 * @swagger
 *  components:
 *     ManagerSchemas:
 *        AddDoctor:
 *           type: object
 *           required:
 *              -   userFullName
 *              -   email
 *              -   dayOfWeekFree
 *              -   mobile
 *           properties:
 *              userFullName:
 *                 type: string
 *                 description: name Topic 
 *              email:
 *                 type: string
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
 *              userCode:
 *                 type: string
 *                 description: user Code Topic
 *        manageTimeSet:
 *           type: object
 *           required:
 *              -  time
 *              -  id_docker
 *           properties:
 *              id_docker:
 *                 type: string
 *                 description: time Topic
 *              time:
 *                 type: object
 *                 description: time Topic 
 *        addDays:
 *           type: object
 *           required:
 *              -  days
 *           properties:
 *              days:
 *                 type: object
 *                 description: time Topic
 *       
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
 *  /manager/addDays:
 *      post:
 *          tags: [Manager-Admin-Section]
 *          summary: Manager
 *          description: add Days
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/addDays'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/addDays'
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
 *         tags: [Manager-Admin-Section]
 *         summary: Customer Auth
 *         description: get Verify Mobile Admin
 *         requestBody:
 *             required: true
 *             content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
 *         responses:
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
 *         tags: [Manager-Admin-Section]
 *         summary: Customer Auth
 *         description: get Verify Mobile Admin
 *         requestBody:
 *             required: true
 *             content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/getVerifyMobileAdmin'
 *         responses:
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
 *  /manager/manageTimeSet:
 *      put:
 *         tags: [Manager-Admin-Section]
 *         summary: Customer Auth
 *         description: get Verify Mobile Admin
 *         requestBody:
 *             required: true
 *             content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/manageTimeSet'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/ManagerSchemas/manageTimeSet'
 *         responses:
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
 *  /manager/manageTimeGet:
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
