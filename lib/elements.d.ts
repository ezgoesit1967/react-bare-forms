import { default as React } from "react";
import { IValidators } from "./validators";
/** @internal */
export declare enum FIELD_NAMES {
    TEXT = "text",
    EMAIL = "email",
    PASSWORD = "password",
    TEXTAREA = "textArea",
    RADIO = "radio",
    CHECKBOX = "checkbox",
    SELECT = "select",
    FILE = "file"
}
export interface IField {
    /** The name of the form element (this should match the state property that you want be updated by this form element) */
    name: string;
    /** If *bare* (see {@link IForm.bare}) is set to true then *labelText* will be inserted within **label** tags. */
    labelText?: string;
    /** If *bare* (see {@link Form.bare}) is set to true then *hint* will be inserted within **small** tags. */
    hint?: string;
    /** These are the {@link IValidators} that you can pass in the validate the form element. */
    validators?: IValidators;
    /** Add additional css */
    className?: string;
}
export interface ITextInputField extends IField {
    /** The state property that gets updated by this input field */
    value: any;
}
export interface IPasswordField extends IField {
    /** The state property that gets updated by this input field */
    value: any;
}
export interface IEmailField extends IField {
    /** The state property that gets updated by this input field */
    value: any;
}
export interface ICheckBoxField extends IField {
    checked: boolean;
}
export interface ITextAreaField extends IField {
    rows?: number;
    /** The state property that gets updated by this input field */
    value: any;
}
export interface IRadioField extends IField {
    checked: boolean;
    disabled?: boolean;
}
export interface IFileField extends IField {
    ref: React.RefObject<HTMLFormElement>;
}
export declare type TypeSelectCssSizeName = "sm" | "default" | "lg";
export interface ISelectField extends IField {
    value: any;
    options: Array<string | {
        [k: string]: any;
    }>;
    size?: TypeSelectCssSizeName;
    objectKey?: string;
    objectValue?: string;
}
/**
 *
 * @param props {@link ITextInputField}
 * @example
 * ```
 *  import {TextInputField} from "react-base-forms"
 *
 *  const state = { username: "" }
 *
 * // A bare form example ... remember to set the {@link Form.bare} property to `true`
 * <TextInputField
 *    value={state.username}
 *    name="username"
 * />
 *
 * // Example with Bootstrap styling (Bootstrap styling comes as default)
 *
 * <TextInputField
 *    value={state.username}
 *    name="username"
 *    hint="Needs to be at least 50 characters long"
 *    labelText="Username"
 *  />
 * ```
 * @constructor
 */
export declare const TextInputField: (props: ITextInputField) => JSX.Element;
/**
 * @param props {@link IEmailField}
 * @example
 * ```
 *  import {EmailField} from "react-base-forms"
 *
 *  const state = { email: "" }
 *
 * // A bare form example ... remember to set the {@link Form.bare} property to `true`
 * <EmailField
 *    value={state.email}
 *    name="email"
 * />
 *
 * // Example with Bootstrap styling (Bootstrap styling comes as default)
 *
 * <EmailField
 *    value={state.email}
 *    name="email"
 *    hint="Needs to be at least 50 characters long"
 *    labelText="Username"
 *  />
 * ```
 * @constructor
 */
export declare const EmailField: (props: IEmailField) => JSX.Element;
/**
 *  The `PasswordField` works the same as the `EmailField` & `TextInputField`'s.
 * @param props {@link IPasswordField}
 * @example
 * ```
 *  import {areFieldsEqual, isFieldEmpty, PasswordField} from "react-base-forms";
 *
 *  const state = { password: "", confirmPassword: "" };
 *
 * // A bare form example ... remember to set the {@link Form.bare} property to `true`
 * <PasswordField
 *    value={state.password}
 *    name="username"
 *    validators={[isFieldEmpty(8)]}
 * />
 *
 * // Example with Bootstrap styling (Bootstrap styling comes as default)
 *
 * <PasswordField
 *    value={state.confirmPassword}
 *    name="password"
 *    hint="Needs to be at least 8 characters long"
 *    labelText="Password"
 *  />
 *  ```
 * Also we can create two *PasswordField* components to confirm passwords are equal. Please see
 * {@link areFieldsEqual} for more info.
 * The first *PasswordField* has has a *name* prop of **password** & the second *PasswordField* a name
 * prop of *confirmPassword*. Then we can add a {@link areFieldsEqual} validator to the *PasswordField*
 * with the *confirmPassword* name props (also notice how {@link areFieldsEqual} takes the first *PasswordField*
 * name as an argument).
 *
 * @example
 * ```
 * <PasswordField
 *  name="password"
 *  // other props...
 *
 * />
 *
 * <PasswordField
 *  name="confirmPassword"
 *  // other props...
 *  validators={[areFieldsEqual("password")]}
 * />
 * ```
 *
 * @constructor
 */
export declare const PasswordField: (props: IPasswordField) => JSX.Element;
/**
 * The CheckBoxField requires a *checked* prop instead of a *value* prop. See
 * {@link ICheckBoxField}.
 * @example
 * ```
 * // A bare form example ... remember to set the {@link Form.bare} property to `true`
 *  import {CheckBoxField} from "react-base-forms";
 *
 *  const state = { password: "", confirmPassword: "" };
 *
 * <CheckBoxField
 *   name="terms"
 *   checked={state.terms}
 * />
 *
 * // Example with Bootstrap styling (Bootstrap styling comes as default)
 * <CheckBoxField
 *   name="terms"
 *   checked={state.terms}
 *   hint="Click to agree"
 *   labelText="Agree to terms & conditions"
 * />
 * ```
 * @param props {@link ICheckBoxField}
 * @constructor
 */
export declare const CheckBoxField: (props: ICheckBoxField) => JSX.Element;
/**
 * The TextAreaField takes in an extra prop of *row* which is a number & declares
 * the number of rows displayed by the textarea element. The TextAreaField accepts
 * all the {@link IField} props.
 * @example
 * ```
 *  *  import {CheckBoxField} from "react-base-forms";
 *
 *  const state = { about: "" };
 * // A bare form example ... remember to set the {@link Form.bare} property to `true`
 * <TextAreaField
 *    value={state.about}
 *    name="about"
 *    validators={[isFieldEmpty(20)]}
 * />
 *
 * // Example with Bootstrap styling (Bootstrap styling comes as default)
 *
 * <TextAreaField
 *    name="about"
 *    value={state.about}
 *    hint="Must be at least 20 characters"
 *    labelText="About you..."
 *    validators={[isFieldEmpty(20)]}
 * />
 * ```
 * @param props {@link ITextInputField}
 * @constructor
 */
export declare const TextAreaField: (props: ITextAreaField) => JSX.Element;
export interface IRadioGroupProps {
    name: string;
    children: any;
}
/**
 * @props {@link IRadioGroupProps}
 * @param props The `RadioGroup` component takes a single props of `name`, which
 * must be a unique to a form. See {@link RadioField}.
 * @constructor
 *
 * @example
 * ```
 *  import {CheckBoxField} from "react-base-forms";
 *
 *  const state = { male: true, female: false };
 *
 *  <RadioGroup name="group1">
 *    // place RadioFields components here...
 *  </RadioGroup>
 * ```
 *
 */
export declare function RadioGroup(props: IRadioGroupProps): JSX.Element;
/**
 *
 * @param props {@link IRadioField}
 * @constructor
 * `RadioField` inputs are designed to be used with the {@link RadioGroup} component.
 *  To use this component, add or nest it within a {@link RadioGroup} component as children.
 *  It's possible to also use validators with a RadioGroup, as shown below:
 * @example
 * ```
 *  import {isRadioChecked, RadioField, RadioGroup} from "react-base-forms";
 *
 *  const state = { male: true, female: false };
 *
 *  <RadioGroup name="group1">
 *    <RadioField
 *      name="male"
 *      checked={state.male}
 *      hint="Click to agree"
 *      labelText="Agree to terms & conditions"
 *    />
 *
 *    <RadioField
 *      name="female"
 *      checked={state.female}
 *      hint="Click to agree"
 *      labelText="Agree to terms & conditions"
 *      validators={[isRadioChecked()]}
 *    />
 *
 *  </RadioGroup>
 * ```
 */
export declare const RadioField: (props: IRadioField) => JSX.Element;
/**
 * A component to render a select field element.
 * @param props {@link ISelectField}
 * @constructor
 * @example
 * ```
 *  import {SelectField} from "react-base-forms";
 *
 *  const state = { fruitChoice: "" };
 *
 * <SelectField
 *   size="lg"
 *   value={state.fruitChoice}
 *   name="fruitChoice"
 *   options={["banana", "apple", "orange"]}
 *  />
 * ```
 *
 * You can also pass an array of objects but you must use both the
 * *objectKey* & *objectValue* props. the `objectKey` will update your state
 * value & the `objectValue` is what is displayed to the user as an option.
 * @example
 * ```
 * // This is your option data
 * let selectData = [
 *   {id: 1, name: "first"},
 *   {id: 2, name: "second"},
 * ];
 * // The state which will receive the update
 * let state = {
 *    select_data_id: undefined as any,
 * };
 *
 * <SelectField
 *   size="lg"
 *   value={state.select_data_id}
 *   name="fruitChoice"
 *   objectKey="id" // Value will update state.select_data_id e.g *1, 2...*
 *   objectValue="name" // Value will be displayed in the select field e.g *first, second...*
 *   options={selectData}
 * />
 * ```
 */
export declare const SelectField: (props: ISelectField) => JSX.Element;
/**
 * The SubmitButton only requires a text string as children props (see below example).
 * The SubmitButton will be disabled until all form fields are validated.
 * @param props {@link ISubmitButtonProps}
 * @constructor
 * @example
 * ```
 * import {SubmitButton} from "react-base-forms";
 *
 * <SubmitButton>Submit</SubmitButton>
 * ```
 */
export declare const FileField: React.ForwardRefExoticComponent<Pick<IFileField, "name" | "labelText" | "hint" | "validators" | "className"> & React.RefAttributes<unknown>>;
export declare const SubmitButton: (props: import("./field_classes/_SubmitButton").ISubmitButtonProps) => JSX.Element;
