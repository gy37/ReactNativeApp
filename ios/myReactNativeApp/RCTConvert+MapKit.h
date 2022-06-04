//
//  RCTConvert+MapKit.h
//  myReactNativeApp
//
//  Created by gaoshenyu on 2022/6/3.
//

#import <MapKit/MapKit.h>
#import <React/RCTConvert.h>
#import <CoreLocation/CoreLocation.h>
#import <React/RCTConvert+CoreLocation.h>

NS_ASSUME_NONNULL_BEGIN

@interface RCTConvert (MapKit)
+ (MKCoordinateSpan)MKCoordinateSpan:(id)json;
+ (MKCoordinateRegion)MKCoordinateRegion:(id)json;
@end

NS_ASSUME_NONNULL_END
