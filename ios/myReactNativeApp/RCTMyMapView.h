//
//  RCTMyMapView.h
//  myReactNativeApp
//
//  Created by gaoshenyu on 2022/6/4.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTMyMapView : MKMapView
@property (nonatomic, copy)RCTBubblingEventBlock onRegionChange;

- (void)changRegion:(MKCoordinateRegion)region;
@end

NS_ASSUME_NONNULL_END
