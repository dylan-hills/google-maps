/// <reference types="google.maps" />
import { WebPlugin } from '@capacitor/core';
import { LatLngBounds } from './definitions';
import { AccElementsArgs, AddMarkerArgs, CameraArgs, AddMarkersArgs, CapacitorGoogleMapsPlugin, CreateMapArgs, CurrentLocArgs, DestroyMapArgs, IndoorMapArgs, MapTypeArgs, PaddingArgs, RemoveMarkerArgs, TrafficLayerArgs, RemoveMarkersArgs, OnScrollArgs, MapBoundsContainsArgs, EnableClusteringArgs, MapBoundsExtendArgs, AddPolygonsArgs, RemovePolygonsArgs, AddCirclesArgs, RemoveCirclesArgs, AddPolylinesArgs, RemovePolylinesArgs } from './implementation';
export declare class CapacitorGoogleMapsWeb extends WebPlugin implements CapacitorGoogleMapsPlugin {
    private gMapsRef;
    private maps;
    private currMarkerId;
    private currPolygonId;
    private currCircleId;
    private currPolylineId;
    private onClusterClickHandler;
    private getIdFromMap;
    private getIdFromMarker;
    private importGoogleLib;
    setCamera(_args: CameraArgs): Promise<void>;
    getMapType(_args: {
        id: string;
    }): Promise<{
        type: string;
    }>;
    setMapType(_args: MapTypeArgs): Promise<void>;
    enableIndoorMaps(_args: IndoorMapArgs): Promise<void>;
    enableTrafficLayer(_args: TrafficLayerArgs): Promise<void>;
    enableAccessibilityElements(_args: AccElementsArgs): Promise<void>;
    dispatchMapEvent(_args: {
        id: string;
    }): Promise<void>;
    enableCurrentLocation(_args: CurrentLocArgs): Promise<void>;
    setPadding(_args: PaddingArgs): Promise<void>;
    getMapBounds(_args: {
        id: string;
    }): Promise<LatLngBounds>;
    addMarkers(_args: AddMarkersArgs): Promise<{
        ids: string[];
    }>;
    addMarker(_args: AddMarkerArgs): Promise<{
        id: string;
    }>;
    removeMarkers(_args: RemoveMarkersArgs): Promise<void>;
    removeMarker(_args: RemoveMarkerArgs): Promise<void>;
    addPolygons(args: AddPolygonsArgs): Promise<{
        ids: string[];
    }>;
    removePolygons(args: RemovePolygonsArgs): Promise<void>;
    addCircles(args: AddCirclesArgs): Promise<{
        ids: string[];
    }>;
    removeCircles(args: RemoveCirclesArgs): Promise<void>;
    addPolylines(args: AddPolylinesArgs): Promise<{
        ids: string[];
    }>;
    removePolylines(args: RemovePolylinesArgs): Promise<void>;
    enableClustering(_args: EnableClusteringArgs): Promise<void>;
    disableClustering(_args: {
        id: string;
    }): Promise<void>;
    onScroll(_args: OnScrollArgs): Promise<void>;
    create(_args: CreateMapArgs): Promise<void>;
    destroy(_args: DestroyMapArgs): Promise<void>;
    mapBoundsContains(_args: MapBoundsContainsArgs): Promise<{
        contains: boolean;
    }>;
    mapBoundsExtend(_args: MapBoundsExtendArgs): Promise<{
        bounds: LatLngBounds;
    }>;
    private getLatLngBounds;
    setCircleListeners(mapId: string, circleId: string, circle: google.maps.Circle): Promise<void>;
    setPolygonListeners(mapId: string, polygonId: string, polygon: google.maps.Polygon): Promise<void>;
    setPolylineListeners(mapId: string, polylineId: string, polyline: google.maps.Polyline): Promise<void>;
    setMarkerListeners(mapId: string, markerId: string, marker: google.maps.Marker): Promise<void>;
    setMapListeners(mapId: string): Promise<void>;
    private buildMarkerOpts;
}
