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
end

# Exemples d'utilisation
IO.puts Calculator.hello("Thomas")
IO.puts "Addition: #{Calculator.add(5, 3)}"
IO.puts "Soustraction: #{Calculator.subtract(10, 4)}"
IO.puts "Multiplication: #{Calculator.multiply(6, 7)}"
IO.puts "Division: #{Calculator.divide(15, 3)}"
IO.puts Calculator.divide(10, 0)