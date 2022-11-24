using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace safesite
{
    internal class Program
    {
        static void Main(string[] args)
        {
            if(Directory.Exists("./dist"))
            {
                Directory.Delete("./dist", true);
            }

            CopyFilesRecursively("./out", "./dist");

            if(!Directory.Exists("./dist/libs"))
            {
                Directory.CreateDirectory("./dist/libs");
            }

            foreach (string newPath in Directory.GetFiles(Environment.CurrentDirectory+"\\dist\\_next", "*.*", SearchOption.AllDirectories))
            {
                File.Copy(newPath, "./dist/libs/"+Path.GetFileName(newPath), true);
            }


            foreach(string html in Directory.GetFiles(Environment.CurrentDirectory+"\\dist"))
            {
                if(Path.GetExtension(html).Contains("html"))
                {
                    ChangeLibs(html);
                }
            }

            Directory.Delete("./dist/_next", true);

            Console.WriteLine("\n\nStatic output placed in dist folder!\n");

            
            //Console.WriteLine(string.Join("\n", Directory.GetFiles(Environment.CurrentDirectory)));
            //Console.ReadLine();
        }

        static void ChangeLibs(string htmlpath)
        {
           var file = File.ReadAllText(htmlpath, Encoding.UTF8);
            

            while (file.Contains("\"/_next"))
            {
                int i = file.IndexOf("/_next");
                int e = file.IndexOf("\"", i);
                string line = file.Substring(i, e - i);
                string fl = "./libs" + line.Substring(line.LastIndexOf("/"));
                file = file.Replace(line, fl);
            }
            file = file.Replace("=\"/", "=\"./");
            File.WriteAllText(htmlpath, file);
            //Console.WriteLine("String is:" + line+"|"+"./libs"+fl);
        }


        private static void CopyFilesRecursively(string sourcePath, string targetPath)
        {
            //Now Create all of the directories
            foreach (string dirPath in Directory.GetDirectories(sourcePath, "*", SearchOption.AllDirectories))
            {
                Directory.CreateDirectory(dirPath.Replace(sourcePath, targetPath));
            }

            //Copy all the files & Replaces any files with the same name
            foreach (string newPath in Directory.GetFiles(sourcePath, "*.*", SearchOption.AllDirectories))
            {
                File.Copy(newPath, newPath.Replace(sourcePath, targetPath), true);
            }
        }


        static void CopyFile(string path)
        {
            foreach(var dir in Directory.GetDirectories(path))
            {
                CopyFile(dir);
            }

            foreach(var file in Directory.GetFiles("./"))
            {
                //File.Copy(file, Environment)
            }
        }
    }
}
