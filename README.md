ClockModal in App.jsx re-renders while typing. What should be used here to stop re-renders?

When I used ClockModal() directly in the return statement, it works well, but not when I call it as a function.

Do I have to use useMemo / useCallback? What is the best practice to adhere while writing React code in terms of reusable components?