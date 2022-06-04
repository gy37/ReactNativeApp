//
//  RCTMyMapView.m
//  myReactNativeApp
//
//  Created by gaoshenyu on 2022/6/4.
//

#import "RCTMyMapView.h"

@implementation RCTMyMapView

/*
// Only override drawRect: if you perform custom drawing.
// An empty implementation adversely affects performance during animation.
- (void)drawRect:(CGRect)rect {
    // Drawing code
}
*/

- (void)changRegion:(MKCoordinateRegion)region {
  [self setRegion:region animated:YES];
}
@end
