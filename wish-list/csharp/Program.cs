using System;
using System.Collections.Generic;
using System.Linq;

namespace WishList
{
    class WishList
    {
        public static void Main(string[] args)
        {
            DisplayWishes();
        }

        public static List<string> GetWishes()
        {
            List<string> wishes = new List<string>()
            {
                "An original eight track of William Shatner's 'Lucy in the Sky with Diamonds'",
                "The ability to think of interesting wishes on short notice",
                "A washtub of Skittles",
                "World peace, but not the kind of world peace where all the humans are removed from existence",
                "A TV that is NOT internet-capable",
                "The ability to fly, but, like, really fast...not just, like, how fast I can walk, but, like, fast, you know?"
            };  

            return wishes;
        }
        public static void DisplayWishes()
        {
            Console.WriteLine("My wishes...");
            Console.WriteLine();
            List<string> wishes = GetWishes();

            for(int i = 0; i < wishes.Count; i++)
            {
                Console.WriteLine(wishes[i]);
            }
        }
    }
}
