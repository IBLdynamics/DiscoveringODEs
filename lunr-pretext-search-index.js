var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  ibldynamics.com   copyright  "
},
{
  "id": "WhyODEs",
  "level": "1",
  "url": "WhyODEs.html",
  "type": "Section",
  "number": "1.1",
  "title": "Why Study Differential Equations?",
  "body": " Why Study Differential Equations?  Why are differential equations so good at describing the natural world? First and foremost, differential equations are a great tool because the derivative, the building block of a differential equation, describes {\\it a rate of change.} Oftentimes, it is easier to measure (or model) how a quantity changes over time than it is to measure (or model) the actual quantity itself. Sometimes the rate of change of this quantity depends only on time. Sometimes the rate of change of this quantity depends only on the quantity itself. And sometimes the rate of change depends on both. Regardless, this ability to describe the rate of change of something allows us to write a differential equation. And as we shall see, solving this differential equation provides a direct description of the quantity itself.  There is a second, but equally important, reason that differential equations are useful in describing the natural world. And that is that force equals mass times acceleration or As you know, acceleration is a rate of change! It is the rate of change of velocity with respect to time or equivalently, it is the second derivative of position with respect to time. And thus the second way that differential equations arise are in describing physical phenomena involving forces. Like before, it is often relatively straightforward to write a differential equation based on forces. And solving this differential equation gives a description of motion, something that would have been impossible without starting with the underlying forces and the associated differential equation.  Our goal in this book is for you to explore differential equations from a modeling perspective and then apply various solution methods to describe a wide range of real-world applications. This textbook is not a cookbook with different recipes to solve different classes of differential equations (though there is some of that). We hope that you are actively engaged in the whole process; from setting up a differential equations model, through using calculus and other techniques to solve them, to interpreting the solution to better understand the behavior of the system being modeled.  Let's get started.  "
},
{
  "id": "TerminologyODEs",
  "level": "1",
  "url": "TerminologyODEs.html",
  "type": "Section",
  "number": "1.2",
  "title": "The Terminology of Differential Equations",
  "body": " The Terminology of Differential Equations  As is true in any discipline, we need to begin by making sure that we have an understanding of the language to describe differential equations. This section introduces most of the terms and notation that we will be using throughout this book.   Explore  A differential equation differential equation is simply an equation that describes a relationship between some function and its derivatives. We will often use the variable to denote the function (or dependent variable), the variable to denote the input (or independent variable), and primes to denote derivatives. Here are a few examples to give you the idea.               The goal of this book is to provide you with tools for  understanding differential equations,  using differential equations, and  solving differential equations (when possible).    Differential equations come in many flavors and like at an ice cream shop, there is a special vocabulary for understanding all of the different ingredients and styles. It is worth a few minutes to put together a brief glossary of some of the terms and notations that we will be using frequently. This list will get longer and it will be very helpful to become fluent with all of the different terms and definitions.  Let's begin with the functions described by a differential equation. Typically the variables or are used to denote the function. Hidden in this notation is that or depend on some other independent variable. We will generally use to denote the independent variable. In other words, when we write we really mean is a function of which we might also write as  As is standard, we use a prime (') to denote a derivative. In other words It is also common to use a dot to denote derivatives when the independent variable is time ( ) so instead of writing you may see used. This latter notation is the one that we will use most frequently. And this brings us to our first entry in the glossary.  differential equation order of   The order of a differential equation is the degree of the highest derivative in the equation.      What is the order of each of the differential equations in Example. ?    differential equation autonomous   A differential equation is autonomous if it does not explicitly depend on the independent variable (generally for us). Otherwise, the differential equation is said to be non-autonomous .      Which of the differential equations in are autonomous?    There is one final term to define for now: ordinary .  differential equation ordinary A differential equation is ordinary if it only contains derivatives with respect to a single independent variable.  Ordinary differential equations are referred to as ODEs for short. Differential equations that use partial derivatives of multiple variables are called partial differential equations and while these are very common (especially in physical applications) they are not the primary focus of this book.    "
},
{
  "id": "def-ODE-2",
  "level": "2",
  "url": "TerminologyODEs.html#def-ODE-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation "
},
{
  "id": "firstODEexample",
  "level": "2",
  "url": "TerminologyODEs.html#firstODEexample",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": "            "
},
{
  "id": "def-orderODE",
  "level": "2",
  "url": "TerminologyODEs.html#def-orderODE",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "differential equation order of   The order of a differential equation is the degree of the highest derivative in the equation.   "
},
{
  "id": "def-ODE-9",
  "level": "2",
  "url": "TerminologyODEs.html#def-ODE-9",
  "type": "Exploration",
  "number": "1.2.1",
  "title": "",
  "body": "  What is the order of each of the differential equations in Example. ?   "
},
{
  "id": "def-autonomous",
  "level": "2",
  "url": "TerminologyODEs.html#def-autonomous",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "differential equation autonomous   A differential equation is autonomous if it does not explicitly depend on the independent variable (generally for us). Otherwise, the differential equation is said to be non-autonomous .   "
},
{
  "id": "def-ODE-11",
  "level": "2",
  "url": "TerminologyODEs.html#def-ODE-11",
  "type": "Exploration",
  "number": "1.2.2",
  "title": "",
  "body": "  Which of the differential equations in are autonomous?   "
},
{
  "id": "def-ODE-12",
  "level": "2",
  "url": "TerminologyODEs.html#def-ODE-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ordinary "
},
{
  "id": "def-ODE-13",
  "level": "2",
  "url": "TerminologyODEs.html#def-ODE-13",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "differential equation ordinary A differential equation is ordinary if it only contains derivatives with respect to a single independent variable. "
},
{
  "id": "VisualizingODEs",
  "level": "1",
  "url": "VisualizingODEs.html",
  "type": "Section",
  "number": "1.3",
  "title": "Visualizing Ordinary Differential Equations",
  "body": " Visualizing Ordinary Differential Equations   The place to start studying ordinary differential equations is to develop a way to visualize the equation. This process isn't new to you, before you learned doing algebra, you learned how to visualize graphs. Before you stared doing derivatives, you learned how to visualize tangent lines. The same process is important here. This section will help you visualize first-order differential equations partly because it helps you understand what comes later. But we also hope that you will see that using these methods are useful in their own right and much understanding and interpretation can be gained using some pretty basic ideas.   The techniques you will explore here apply to differential equations of the form where the function is assumed to be differentiable in both and . Note that if the differential equation is autonomous then    Explore    List every interpretation of the derivative that you can think of.    slope field   Certainly, one of your answers to was that a derivative is a slope . Use this to explain why equation assigns a slope to each point in the plane. Explain how you might use this to draw a picture encapsulating this information (called a slope field ) for a given function       Sketch slope fields for for       Sketch slope fields for for       Match the following slope fields in to the corresponding differential equation.            4 slope fields, to be matched with the differential equations in .     Conjecture    Apply    Prove   "
},
{
  "id": "derivmeaning",
  "level": "2",
  "url": "VisualizingODEs.html#derivmeaning",
  "type": "Exploration",
  "number": "1.3.1",
  "title": "",
  "body": "  List every interpretation of the derivative that you can think of.   "
},
{
  "id": "VisualizingODEs-4-3",
  "level": "2",
  "url": "VisualizingODEs.html#VisualizingODEs-4-3",
  "type": "Exploration",
  "number": "1.3.2",
  "title": "",
  "body": "slope field   Certainly, one of your answers to was that a derivative is a slope . Use this to explain why equation assigns a slope to each point in the plane. Explain how you might use this to draw a picture encapsulating this information (called a slope field ) for a given function    "
},
{
  "id": "VisualizingODEs-4-4",
  "level": "2",
  "url": "VisualizingODEs.html#VisualizingODEs-4-4",
  "type": "Exploration",
  "number": "1.3.3",
  "title": "",
  "body": "  Sketch slope fields for for    "
},
{
  "id": "VisualizingODEs-4-5",
  "level": "2",
  "url": "VisualizingODEs.html#VisualizingODEs-4-5",
  "type": "Exploration",
  "number": "1.3.4",
  "title": "",
  "body": "  Sketch slope fields for for    "
},
{
  "id": "slopefield_matching_equations",
  "level": "2",
  "url": "VisualizingODEs.html#slopefield_matching_equations",
  "type": "Exploration",
  "number": "1.3.5",
  "title": "",
  "body": "  Match the following slope fields in to the corresponding differential equation.         "
},
{
  "id": "slopefield_matching1",
  "level": "2",
  "url": "VisualizingODEs.html#slopefield_matching1",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "  4 slope fields, to be matched with the differential equations in .  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
