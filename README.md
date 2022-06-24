# Directives

In Angular if you create an custom html element or attribute it is called as
Directive

In angular there are three kinds of directives

* Component Directive
* Structural Directive
* Attribute Directives

### Component Directives

Every component you create is an custom html element. So every 
component is a directive.


### Structural Directive

Structural Directive controls generation of html elements...
or it will hide or unhide html elements.

All structural directives are prefixed with *

Some inbuilt structural directives : ngFor,ngIf, ngSwitch


## Attribute directives

Attributes Diretives change the behavior of the target elements [data, css style...]

there are three kinds of attribute directives 

* input Directives
* output directives
* Input Output directives

### Input directives

Input Directive take input the variable specified in the right
all input directives usually wrapped with []

some inbuilt input directives include : ngClass, ngStyle, routerLink

### Output directives

Output Directives are event listener they listen for particular event
on the target element of

all output directives are enclosed within ()

some output directives include: click, doubleclick, keyup,keydown,mouseover

Generally upon an event it calls the function which is mentioned as
value in the right

## Input output Directives

Work as both input and output directives

it is enclosed with in [()]

there is only one input output directive called as ngModel

if you want to use it you have to import FormsModule