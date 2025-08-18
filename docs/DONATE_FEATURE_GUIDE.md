# Donate Feature Guide

This document provides a comprehensive guide on the current state of the donate functionality in the Children 4 World Children website and instructions for re-enabling it when needed.

## Current Status: Disabled

The donate functionality has been temporarily disabled across the application. All donate buttons and related UI elements have been removed or hidden, and the donate page route has been commented out.

## Files Modified to Disable Donate Functionality

1. **Navigation Bar**
   - File: `src/components/Navbar.tsx`
   - Changes: 
     - Removed the Donate button from the desktop navigation menu
     - Removed the Donate button from the mobile menu
     - Ensured all navigation items (including Contact) are properly displayed in the mobile menu
     - Code changes for mobile menu:
       ```tsx
       {/* Mobile Menu */}
       {isOpen && (
         <div className="md:hidden bg-white border-t border-gray-200">
           <div className="px-2 pt-2 pb-3 space-y-1">
             {navigation.map((item) => (
               <Link
                 key={item.name}
                 to={item.href}
                 className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                   isActive(item.href)
                     ? 'text-purple-600 bg-purple-50'
                     : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                 }`}
                 onClick={() => setIsOpen(false)}
               >
                 {item.name}
               </Link>
             ))}
           </div>
         </div>
       )}
       ```

2. **Routing**
   - File: `src/App.tsx`
   - Changes: 
     - Commented out the Donate page import
     - Commented out the Donate route

3. **Pages with Donate Buttons**
   - `src/pages/Home.tsx`: Removed the Donate button section
   - `src/pages/Programs.tsx`: Removed Donate button from Call to Action
   - `src/pages/Impact.tsx`: Removed Donate button from Call to Action
   - `src/pages/Events.tsx`: 
     - Changed "Donate & Register" buttons to "Register Now"
     - Removed "Make a Donation" button from Call to Action

## How to Re-enable the Donate Feature

### 1. Restore the Donate Page Route
In `src/App.tsx`:
1. Uncomment the Donate page import:
   ```typescript
   // const Donate = lazy(() => import('./pages/Donate'));
   ```
   to
   ```typescript
   const Donate = lazy(() => import('./pages/Donate'));
   ```

2. Uncomment the Donate route:
   ```typescript
   {/* Temporarily disabled Donate page
   <Route path="/donate" element={
     <LazyRoute>
       <Donate />
     </LazyRoute>
   } />
   */}
   ```
   to
   ```typescript
   <Route path="/donate" element={
     <LazyRoute>
       <Donate />
     </LazyRoute>
   } />
   ```

### 2. Restore Navigation
In `src/components/Navbar.tsx`:
1. Add back the Donate button in the desktop navigation:
   ```tsx
   {navigation.map((item) => (
     // ... existing navigation items ...
   ))}
   
   {/* Donate Button */}
   <Link
     to="/donate"
     className="px-3 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors duration-200"
   >
     Donate
   </Link>
   ```

### 3. Restore Donate Buttons on Pages

#### Home Page
In `src/pages/Home.tsx`:
1. Add back the Donate button section before the About Us section:
   ```tsx
   {/* Donate Button Section */}
   <section className="section-standard">
     <div className="container-standard">
       <div className="text-center">
         <Link to="/donate" className="btn-primary">
           Donate Now
           <ArrowRight className="icon-arrow" />
         </Link>
       </div>
     </div>
   </section>
   ```

#### Programs Page
In `src/pages/Programs.tsx`:
1. Update the Call to Action section to include the Donate button:
   ```tsx
   <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
       Donate Now
     </button>
     <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
       Volunteer With Us
     </button>
   </div>
   ```

#### Impact Page
In `src/pages/Impact.tsx`:
1. Update the Call to Action section to include the Donate button:
   ```tsx
   <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
       Donate Now
     </button>
     <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
       Volunteer With Us
     </button>
   </div>
   ```

#### Events Page
In `src/pages/Events.tsx`:
1. Update the event buttons to show "Donate & Register" for events with a target:
   ```tsx
   <button className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200">
     {event.target > 0 ? 'Donate & Register' : 'Register Now'}
   </button>
   ```

2. Add back the Donate button in the Call to Action section:
   ```tsx
   <div className="flex flex-col sm:flex-row gap-4 justify-center">
     <button className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
       Make a Donation
     </button>
     <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200">
       Volunteer Opportunities
     </button>
   </div>
   ```

## Testing After Re-enabling

After re-enabling the donate functionality, please test the following:
1. Navigation to the donate page from all entry points
2. Functionality of all donate buttons
3. Responsive behavior on different screen sizes
4. Integration with any payment processing systems

## Notes

- The Donate page component (`src/pages/Donate.tsx`) was not removed, only its route was disabled.
- All donation-related backend functionality remains in place and will be reactivated when the routes are restored.
- Ensure that any third-party payment integrations are properly configured before re-enabling the feature in production.
