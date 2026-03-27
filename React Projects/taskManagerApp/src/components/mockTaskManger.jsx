import React from 'react';

export function mockTaskManger() {
    return new Promise( (resolve) => (
        resolve([
            "Revise CSS Flexbox",
            "Build a mini project",
            "Practice DOM Manipulation"
            ])

    ));
}

export default mockTaskManger;