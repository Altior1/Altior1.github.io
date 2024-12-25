defmodule Calculator do
  def hello(name) do
    "Bonjour #{name} !"
  end

  def add(a, b) do
    a + b
  end

  def subtract(a, b) do
    a - b
  end

  def multiply(a, b) do
    a * b
  end

  def divide(a, b) when b != 0 do
    a / b
  end

  def divide(_, 0) do
    "Erreur: Division par zéro impossible"
  end

  def newFonction(a, b) do
    if(a>b) do
      "ok"
    else
      "ko"
    end
  end

  def newFonction(_,0) do
    "obv ok"
  end
end

# Exemples d'utilisation
IO.puts :e