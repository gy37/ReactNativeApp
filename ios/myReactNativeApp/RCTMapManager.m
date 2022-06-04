//
//  RCTMapManager.m
//  myReactNativeApp
//
//  Created by gaoshenyu on 2022/6/3.
//

#import "RCTMapManager.h"
#import <MapKit/MapKit.h>
#import "RCTConvert+MapKit.h"
#import "RCTMyMapView.h"
#import <React/RCTUIManager.h>
#import <React/RCTLog.h>

@interface RCTMapManager()<MKMapViewDelegate>

@end
@implementation RCTMapManager
RCT_EXPORT_MODULE(RCTMyMapView)//RCTMapManager会报错重名，改为RCTMyMapView

RCT_EXPORT_VIEW_PROPERTY(zoomEnabled, BOOL);
RCT_EXPORT_VIEW_PROPERTY(onRegionChange, RCTBubblingEventBlock);

RCT_CUSTOM_VIEW_PROPERTY(region, MKCoordinateRegion, MKMapView) {
  [view setRegion:json ? [RCTConvert MKCoordinateRegion:json] : defaultView.region animated:YES];
}

//第一个参数加nonnull修饰
RCT_EXPORT_METHOD(changeRegion:(nonnull NSNumber *)reactTag region:(NSDictionary *)region) {
  [self.bridge.uiManager addUIBlock:^(RCTUIManager *uiManager, NSDictionary<NSNumber *,UIView *> *viewRegistry) {
    UIView *map = viewRegistry[reactTag];
    if (!map || ![map isKindOfClass:[RCTMyMapView class]]) {
      RCTLogError(@"Cannot find RCTMyMapView with tag #%@", reactTag);
      return;
    }
    [(RCTMyMapView *)map changRegion:[RCTConvert MKCoordinateRegion:region]];
  }];
}

- (UIView *)view {
//  return [[MKMapView alloc] init];
  RCTMyMapView *map = [[RCTMyMapView alloc] init];
  map.delegate = self;
  return map;
}

- (void)mapView:(RCTMyMapView *)mapView regionDidChangeAnimated:(BOOL)animated {
  if (!mapView.onRegionChange) return;
  MKCoordinateRegion region = mapView.region;
  mapView.onRegionChange(@{@"region": @{
                                @"latitude": @(region.center.latitude),
                                @"longitude": @(region.center.longitude),
                                @"latitudeDelta": @(region.span.latitudeDelta),
                                @"longitudeDelta": @(region.span.longitudeDelta),
                            }
                         });
}

@end
