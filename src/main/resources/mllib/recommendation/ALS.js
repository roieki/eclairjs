/*                                                                         
* Copyright 2016 IBM Corp.                                                 
*                                                                          
* Licensed under the Apache License, Version 2.0 (the "License");          
* you may not use this file except in compliance with the License.         
* You may obtain a copy of the License at                                  
*                                                                          
*      http://www.apache.org/licenses/LICENSE-2.0                          
*                                                                          
* Unless required by applicable law or agreed to in writing, software      
* distributed under the License is distributed on an "AS IS" BASIS,        
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. 
* See the License for the specific language governing permissions and      
* limitations under the License.                                           
*/ 



/**
 * A more class to represent a rating than array[Int, Int, float].
 * @classdesc
 */

/**
 * @param {integer} user
 * @param {integer} product
 * @param {float} rating
 *  @class
 */
var Rating = function() {
	this.logger = Logger.getLogger("Rating_js");
	var jvmObject = arguments[0];
	if (arguments.length > 1) {
		jvmObject = new org.apache.spark.mllib.recommendation.Rating(arguments[0],arguments[1],arguments[2]);
	}

	 JavaWrapper.call(this, jvmObject);

};

Rating.prototype = Object.create(JavaWrapper.prototype); 

Rating.prototype.constructor = Rating;

Rating.prototype.user = function() {
  return this.getJavaObject().user();
};

Rating.prototype.product = function() {
  return this.getJavaObject().product();
};

Rating.prototype.rating = function() {
  return this.getJavaObject().rating();
};

Rating.prototype.toString = function() { 
    return "{product: ["+this.user()+","+this.product()+","+this.rating()+"]}";
};




/**
 * Alternating Least Squares matrix factorization.
 *
 * ALS attempts to estimate the ratings matrix `R` as the product of two lower-rank matrices,
 * `X` and `Y`, i.e. `X * Yt = R`. Typically these approximations are called 'factor' matrices.
 * The general approach is iterative. During each iteration, one of the factor matrices is held
 * constant, while the other is solved for using least squares. The newly-solved factor matrix is
 * then held constant while solving for the other factor matrix.
 *
 * This is a blocked implementation of the ALS factorization algorithm that groups the two sets
 * of factors (referred to as "users" and "products") into blocks and reduces communication by only
 * sending one copy of each user vector to each product block on each iteration, and only for the
 * product blocks that need that user's feature vector. This is achieved by precomputing some
 * information about the ratings matrix to determine the "out-links" of each user (which blocks of
 * products it will contribute to) and "in-link" information for each product (which of the feature
 * vectors it receives from each user block it will depend on). This allows us to send only an
 * array of feature vectors between each user block and product block, and have the product block
 * find the users' ratings and update the products based on these messages.
 *
 * For implicit preference data, the algorithm used is based on
 * "Collaborative Filtering for Implicit Feedback Datasets", available at
 * [[http://dx.doi.org/10.1109/ICDM.2008.22]], adapted for the blocked approach used here.
 *
 * Essentially instead of finding the low-rank approximations to the rating matrix `R`,
 * this finds the approximations for a preference matrix `P` where the elements of `P` are 1 if
 * r > 0 and 0 if r <= 0. The ratings then act as 'confidence' values related to strength of
 * indicated user
 * preferences rather than explicit ratings given to items.
 * @classdesc
 */

/**
 * Constructs an ALS instance with default parameters: {numBlocks: -1, rank: 10, iterations: 10,
 * lambda: 0.01, implicitPrefs: false, alpha: 1.0}.
 * @returns {??} 
 *  @class
 */
var ALS = function(jvmObject) {
	 
	 this.logger = Logger.getLogger("ALS_js");
	 JavaWrapper.call(this, jvmObject);

};

ALS.prototype = Object.create(JavaWrapper.prototype);

ALS.prototype.constructor = ALS;



/**
 * Set the number of blocks for both user blocks and product blocks to parallelize the computation
 * into; pass -1 for an auto-configured number of blocks. Default: -1.
 * @param {number} numBlocks
 * @returns {} 
 */
ALS.prototype.setBlocks = function(numBlocks) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setBlocks(numBlocks);
//   return new (javaObject);
};


/**
 * Set the number of user blocks to parallelize the computation.
 * @param {number} numUserBlocks
 * @returns {} 
 */
ALS.prototype.setUserBlocks = function(numUserBlocks) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setUserBlocks(numUserBlocks);
//   return new (javaObject);
};


/**
 * Set the number of product blocks to parallelize the computation.
 * @param {number} numProductBlocks
 * @returns {} 
 */
ALS.prototype.setProductBlocks = function(numProductBlocks) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setProductBlocks(numProductBlocks);
//   return new (javaObject);
};


/**
 * @param {number} rank
 * @returns {} 
 */
ALS.prototype.setRank = function(rank) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setRank(rank);
//   return new (javaObject);
};


/**
 * @param {number} iterations
 * @returns {} 
 */
ALS.prototype.setIterations = function(iterations) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setIterations(iterations);
//   return new (javaObject);
};


/**
 * @param {number} lambda
 * @returns {} 
 */
ALS.prototype.setLambda = function(lambda) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setLambda(lambda);
//   return new (javaObject);
};


/**
 * @param {boolean} implicitPrefs
 * @returns {} 
 */
ALS.prototype.setImplicitPrefs = function(implicitPrefs) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setImplicitPrefs(implicitPrefs);
//   return new (javaObject);
};


/**
 * Sets the constant used in computing confidence in implicit ALS. Default: 1.0.
 * @param {number} alpha
 * @returns {} 
 */
ALS.prototype.setAlpha = function(alpha) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setAlpha(alpha);
//   return new (javaObject);
};


/**
 * @param {number} seed
 * @returns {} 
 */
ALS.prototype.setSeed = function(seed) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setSeed(seed);
//   return new (javaObject);
};


/**
 * Set whether the least-squares problems solved at each iteration should have
 * nonnegativity constraints.
 * @param {boolean} b
 * @returns {} 
 */
ALS.prototype.setNonnegative = function(b) {
throw "not implemented by ElairJS";
//   var javaObject =  this.getJavaObject().setNonnegative(b);
//   return new (javaObject);
};


/**
 * Run ALS with the configured parameters on an input RDD of (user, product, rating) triples.
 * Returns a MatrixFactorizationModel with feature vectors for each user and product.
 * @param {RDD} ratings
 * @returns {MatrixFactorizationModel} 
 */
ALS.prototype.runwithRDD = function(ratings) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  this.getJavaObject().run(ratings_uw);
//   return new MatrixFactorizationModel(javaObject);
};


/**
 * Java-friendly version of {@link run}.
 * @param {JavaRDD} ratings
 * @returns {MatrixFactorizationModel} 
 */
ALS.prototype.runwithJavaRDD = function(ratings) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  this.getJavaObject().run(ratings_uw);
//   return new MatrixFactorizationModel(javaObject);
};
//
// static methods
//


/**
 * Train a matrix factorization model given an RDD of ratings given by users to some products,
 * in the form of (userID, productID, rating) pairs. We approximate the ratings matrix as the
 * product of two lower-rank matrices of a given rank (number of features). To solve for these
 * features, we run a given number of iterations of ALS. This is done using a level of
 * parallelism given by `blocks`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @param {number} blocks      level of parallelism to split computation into
 * @param {number} seed        random seed
 * @returns {MatrixFactorizationModel} 
 */
ALS.train = function(ratings,rank,iterations,lambda,blocks,seed) {
    /*
    var ratings_uw = Utils.unwrapObject(ratings);
    if (ratings_uw instanceof org.apache.spark.api.java.JavaRDD) {
        ratings_uw = ratings_uw.rdd();
    }
    */
    var ratings_uw = org.apache.spark.api.java.JavaRDD.toRDD(ratings.getJavaObject());
    var javaObject =  org.apache.spark.mllib.recommendation.ALS.train(ratings_uw,rank,iterations,lambda,blocks,seed);
    return new MatrixFactorizationModel(javaObject);
};


/**
 * Train a matrix factorization model given an RDD of ratings given by users to some products,
 * in the form of (userID, productID, rating) pairs. We approximate the ratings matrix as the
 * product of two lower-rank matrices of a given rank (number of features). To solve for these
 * features, we run a given number of iterations of ALS. This is done using a level of
 * parallelism given by `blocks`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @param {number} blocks      level of parallelism to split computation into
 * @returns {MatrixFactorizationModel} 
 */
ALS.train1 = function(ratings,rank,iterations,lambda,blocks) {
    return ALS.train(ratings,rank,iterations,lambda,blocks,System.nanoTime());
};

/**
 * Train a matrix factorization model given an RDD of ratings given by users to some products,
 * in the form of (userID, productID, rating) pairs. We approximate the ratings matrix as the
 * product of two lower-rank matrices of a given rank (number of features). To solve for these
 * features, we run a given number of iterations of ALS. The level of parallelism is determined
 * automatically based on the number of partitions in `ratings`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @returns {MatrixFactorizationModel} 
 */
ALS.train2 = function(ratings,rank,iterations,lambda) {
    return ALS.train(ratings,rank,iterations,lambda, -1);
};


/**
 * Train a matrix factorization model given an RDD of ratings given by users to some products,
 * in the form of (userID, productID, rating) pairs. We approximate the ratings matrix as the
 * product of two lower-rank matrices of a given rank (number of features). To solve for these
 * features, we run a given number of iterations of ALS. The level of parallelism is determined
 * automatically based on the number of partitions in `ratings`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @returns {MatrixFactorizationModel} 
 */
ALS.train3 = function(ratings,rank,iterations) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  org.apache.spark.mllib.recommendation.ALS.train(ratings_uw,rank,iterations);
//   return new MatrixFactorizationModel(javaObject);
};


/**
 * Train a matrix factorization model given an RDD of 'implicit preferences' given by users
 * to some products, in the form of (userID, productID, preference) pairs. We approximate the
 * ratings matrix as the product of two lower-rank matrices of a given rank (number of features).
 * To solve for these features, we run a given number of iterations of ALS. This is done using
 * a level of parallelism given by `blocks`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @param {number} blocks      level of parallelism to split computation into
 * @param {number} alpha       confidence parameter
 * @param {number} seed        random seed
 * @returns {MatrixFactorizationModel} 
 */
ALS.trainImplicit0 = function(ratings,rank,iterations,lambda,blocks,alpha,seed) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  org.apache.spark.mllib.recommendation.ALS.trainImplicit(ratings_uw,rank,iterations,lambda,blocks,alpha,seed);
//   return new MatrixFactorizationModel(javaObject);
};


/**
 * Train a matrix factorization model given an RDD of 'implicit preferences' given by users
 * to some products, in the form of (userID, productID, preference) pairs. We approximate the
 * ratings matrix as the product of two lower-rank matrices of a given rank (number of features).
 * To solve for these features, we run a given number of iterations of ALS. This is done using
 * a level of parallelism given by `blocks`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @param {number} blocks      level of parallelism to split computation into
 * @param {number} alpha       confidence parameter
 * @returns {MatrixFactorizationModel} 
 */
ALS.trainImplicit1 = function(ratings,rank,iterations,lambda,blocks,alpha) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  org.apache.spark.mllib.recommendation.ALS.trainImplicit(ratings_uw,rank,iterations,lambda,blocks,alpha);
//   return new MatrixFactorizationModel(javaObject);
};


/**
 * Train a matrix factorization model given an RDD of 'implicit preferences' given by users to
 * some products, in the form of (userID, productID, preference) pairs. We approximate the
 * ratings matrix as the product of two lower-rank matrices of a given rank (number of features).
 * To solve for these features, we run a given number of iterations of ALS. The level of
 * parallelism is determined automatically based on the number of partitions in `ratings`.
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @param {number} lambda      regularization factor (recommended: 0.01)
 * @param {number} alpha       confidence parameter
 * @returns {MatrixFactorizationModel} 
 */
ALS.trainImplicit2 = function(ratings,rank,iterations,lambda,alpha) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  org.apache.spark.mllib.recommendation.ALS.trainImplicit(ratings_uw,rank,iterations,lambda,alpha);
//   return new MatrixFactorizationModel(javaObject);
};


/**
 * Train a matrix factorization model given an RDD of 'implicit preferences' ratings given by
 * users to some products, in the form of (userID, productID, rating) pairs. We approximate the
 * ratings matrix as the product of two lower-rank matrices of a given rank (number of features).
 * To solve for these features, we run a given number of iterations of ALS. The level of
 * parallelism is determined automatically based on the number of partitions in `ratings`.
 * Model parameters `alpha` and `lambda` are set to reasonable default values
 *
 * @param {RDD} ratings     RDD of (userID, productID, rating) pairs
 * @param {number} rank        number of features to use
 * @param {number} iterations  number of iterations of ALS (recommended: 10-20)
 * @returns {MatrixFactorizationModel} 
 */
ALS.trainImplicit3 = function(ratings,rank,iterations) {
throw "not implemented by ElairJS";
//   var ratings_uw = Utils.unwrapObject(ratings);
//   var javaObject =  org.apache.spark.mllib.recommendation.ALS.trainImplicit(ratings_uw,rank,iterations);
//   return new MatrixFactorizationModel(javaObject);
};