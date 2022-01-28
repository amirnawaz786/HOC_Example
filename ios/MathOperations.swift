//
//  MathOperations.swift
//  StartUp
//
//  Created by Amir on 1/13/22.
//

import Foundation
@objc(MathOperations)
class MathOperations: NSObject {

  
  @objc
  func add() {
    print("Testing Please Ignore ====>>>>>Bridging from IOS")
  }
  
 
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
