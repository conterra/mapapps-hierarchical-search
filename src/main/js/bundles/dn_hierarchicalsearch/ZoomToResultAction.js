/*
 * Copyright (C) 2021 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
export default class ZoomToResultAction {

    executeAction(results, store, filter, zoomScale) {
        const mapWidgetModel = this._mapWidgetModel;
        const selectedGeometry = results[0];
        if (selectedGeometry.geometry.type === 'polygon') {
            const extent = selectedGeometry.geometry.extent;
            mapWidgetModel.view.extent = extent.expand(1.5);
        } else {
            mapWidgetModel.view.center = [selectedGeometry.geometry.longitude, selectedGeometry.geometry.latitude];
            mapWidgetModel.view.scale = zoomScale;
        }
    }

}
