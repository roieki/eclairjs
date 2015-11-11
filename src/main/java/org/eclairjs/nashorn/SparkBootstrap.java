/*
 * Copyright 2015 IBM Corp.
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

package org.eclairjs.nashorn;

import java.io.FileReader;
import java.net.URL;

import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import javax.script.ScriptException;

public class SparkBootstrap implements Bootstrap {

    private String getResourceAsURLStirng(String file) {

        String res = null;
        try {
            res = getClass().getResource(file).toURI().toString();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return res;
    }

    public void load(ScriptEngine engine) {
        try {
        	engine.eval("load('" + getResourceAsURLStirng("/JavaWrapper.js") + "');");
        	engine.eval("load('" + getResourceAsURLStirng("/SparkConf.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/SparkContext.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/RDD.js") + "');");
            

            engine.eval("load('" + getResourceAsURLStirng("/Duration.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/DStream.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/StreamingContext.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/KafkaUtils.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/Utils.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/LinearRegressionWithSGD.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/LabeledPoint.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/Logger.js") + "');");
            // sql
            engine.eval("load('" + getResourceAsURLStirng("/sql/Column.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/DataFrame.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/DataFrameReader.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/DataFrameWriter.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/DataTypes.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/GroupedData.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/SQLContext.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/Row.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/RowFactory.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/StructField.js") + "');");
            engine.eval("load('" + getResourceAsURLStirng("/sql/StructType.js") + "');");
            NashornEngineSingleton.setEngine(engine);
        } catch(Exception e) {
            e.printStackTrace();
        }
    }
}