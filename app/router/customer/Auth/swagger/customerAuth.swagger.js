/**
 * @swagger
 *  components:
 *     CustomerAuthSchemas:
 *        Signing:
 *           type: object
 *           required:
 *              -   userFullName
 *              -   email
 *              -   mobile
 *           properties:
 *              userFullName:
 *                 type: string
 *                 description: name Topic 
 *              email:
 *                 type: string
 *                 description: name Topic  
 *              mobile:
 *                 type: string
 *                 description: name Topic 
 *        getVerifyMobileAdmin:
 *           type: object
 *           required:
 *              -   code
 *           properties:
 *              code:
 *                 type: string
 *                 description: name Topic 
 *      
 */

/**
 * @swagger
 *  tags:
 *      name : Customer-Auth-Admin-Section
 *      description : Customer-Auth-Admin-Section
 */


/**
 * @swagger
 *  customer/Signing:
 *      post:
 *          tags :  [Customer-Auth-Admin-Section]
 *          summary: Customer-Auth
 *          description: Signing
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/CustomerAuthSchemas/Signing'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/CustomerAuthSchemas/Signing'
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
 *  customer/SendsMobileCodeAdmin:
 *      get:
 *          tags :  [Customer-Auth-Admin-Section]
 *          summary: Customer-Auth
 *          description: SendsMobileCodeAdmin
 *           requestBody:
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
 *  customer/getVerifyMobileAdmin:
 *      post:
 *          tags :  [Customer-Auth-Admin-Section]
 *          summary: Customer-Auth
 *          description: getVerifyMobileAdmin
 *          requestBody:
 *              required: true
 *              content:
 *                  application/x-www-form-urlencoded:
 *                      schema:
 *                          $ref: '#/components/CustomerAuthSchemas/getVerifyMobileAdmin'
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/CustomerAuthSchemas/getVerifyMobileAdmin'
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