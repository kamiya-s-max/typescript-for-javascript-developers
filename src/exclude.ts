export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type ExcludeType = Exclude<SomeTypes, DebugType>;